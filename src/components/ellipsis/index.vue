<template>
    <div v-if="text" class="nebula-ellipsis">
        <div ref="block" class="nebula-ellipsis__block" :style="textStyle">
            {{ text }}
            <slot name="extra" :isMore="isMore" />
        </div>

        <template v-if="!showMore && isMore">
            <div
                v-for="(t, i) in texts"
                :key="i"
                class="nebula-ellipsis__text"
                :style="textStyle"
                @click="handleClick"
            >
                {{ t }}
                <!-- <span v-html="t"></span> -->
                <div v-if="i === texts.length - 1" class="nebula-ellipsis__extra">
                    <slot name="extra" :isMore="isMore" />
                </div>
            </div>
        </template>
        <div v-else class="nebula-ellipsis__text" :style="textStyle">
            <span v-html="originText || text"></span>
            <div class="nebula-ellipsis__extra">
                <slot name="extra" :isMore="isMore" />
            </div>
        </div>
    </div>
    <div
        v-else
        class="nebula-ellipsis nebula-ellipsis--lineclamp"
        :style="[overflowStyle, textStyle]"
        @click="handleClick"
    >
        <slot />
    </div>
</template>

<script>
import { defineComponent, watch, computed, ref, onMounted } from 'vue';

const PLACEHOLDER = '...';

export default defineComponent({
    name: 'NEllipsis',
    props: {
        text: {
            type: String,
            default: null,
        },
        originText: {
            type: String,
            default: null,
        },
        textStyle: {
            type: Object,
            default: () => {},
        },
        lines: {
            type: Number,
            default: 1,
        },
        showMore: {
            type: Boolean,
            default: false,
        },
    },

    setup(props, { slots, emit }) {
        const texts = ref([]);
        const isMore = ref(false);

        const overflowStyle = computed(() => ({
            '-webkit-line-clamp': `${props.lines}`,
        }));

        const block = ref(null);
        const extra = ref(null);
        const task = new Promise((resolve) => {
            onMounted(() => {
                resolve();
            });
        });

        const initData = async () => {
            await task;
            const elem = block.value;

            if (!elem) {
                return;
            }

            let blockWidth;
            try {
                blockWidth = slots.extra()[0].el.clientWidth || 50;
            } catch (e) {
                blockWidth = 50;
            }

            const style = window.getComputedStyle(elem);
            const width = elem.clientWidth;
            createCanvas({ style, width, blockWidth });
        };

        watch(
            () => props.text,
            () => {
                initData();
            },
            {
                immediate: true,
            },
        );

        watch(
            () => props.lines,
            () => {
                initData();
            },
            {
                immediate: true,
            },
        );

        const getCanvas = () => {
            let context, canvas;
            try {
                canvas = document.getElementById('ellipsis-canvas');
                if (!canvas) {
                    canvas = document.createElement('canvas');
                    canvas.setAttribute('id', 'ellipsis-canvas');
                    document.body.appendChild(canvas);
                }
                context = canvas.getContext('2d');

                return {
                    context,
                    canvas,
                };
            } catch (e) {
                console.log(e);
            }
        };

        const compute = ({ context, canvas, blockWidth, width }) => {
            const { text, lines } = props;
            const chr = text.split('');
            const row = [];
            let temp = '';
            let more = false;
            for (let i = 0; i < chr.length; i++) {
                if (row.length === lines) {
                    more = true;
                    temp = '';
                    break;
                }
                let totalWidth = width;
                const t = temp;
                if (row.length + 1 === lines) {
                    totalWidth -= blockWidth;
                }

                if (context.measureText(t + chr[i]).width <= totalWidth && chr[i] !== '\\n') {
                    temp += chr[i];
                } else {
                    row.push(temp);
                    temp = chr[i];
                }
            }

            temp && row.push(temp);
            more && (row[row.length - 1] = `${row[row.length - 1]}...`);
            document.body.removeChild(canvas);
            texts.value = row;
            isMore.value = more || (!!props.originText && props.originText !== props.text);
        };

        const createCanvas = ({ style, width, blockWidth }) => {
            try {
                const { context, canvas } = getCanvas();

                const [fontSize, fontFamily] = [
                    style.getPropertyValue('font-size'),
                    style.getPropertyValue('font-family'),
                ];

                context.font = `${fontSize} ${fontFamily}`;
                blockWidth = context.measureText(PLACEHOLDER).width + blockWidth;

                compute({ context, canvas, blockWidth, width });
            } catch (e) {
                console.log(e);
            }
        };

        const handleClick = () => {
            emit('click', props.text);
        };
        return {
            block,
            extra,
            texts,
            isMore,
            overflowStyle,

            initData,
            handleClick,
        };
    },
});
</script>

<style lang="less">
@line-height: 1.5;
@ellipsis-text-font-size: 13px;
@ellipsis-text-color: #7f8792;
.nebula-ellipsis {
    display: inline-block;
    width: 100%;
    overflow: hidden;
    font-size: @ellipsis-text-font-size;
    line-height: @line-height;
    color: @ellipsis-text-color;
    text-align: left;
    word-break: break-all;

    /* autoprefixer: off */
    -webkit-box-orient: vertical;

    &--lineclamp {
        position: relative;
        display: -webkit-box;
        overflow: hidden;
        text-overflow: ellipsis;
    }

    &__text {
        position: relative;
        display: flex;
        align-items: center;
        body {
            margin: 1rem;
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu,
                Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
            line-height: 1.4;
        }
        img {
            max-width: 100%;
            height: auto;
        }
        table {
            border-collapse: collapse;
        }
        table th,
        table td {
            padding: 0.4rem;
            border: 1px solid #ccc;
        }
        figure {
            display: table;
            margin: 1rem auto;
        }
        figure figcaption {
            display: block;
            margin-top: 0.25rem;
            color: #999;
            text-align: center;
        }
        hr {
            border-color: #ccc;
            border-style: solid;
            border-width: 1px 0 0 0;
        }
        code {
            padding: 0.1rem 0.2rem;
            background-color: #e8e8e8;
            border-radius: 3px;
        }
        .mce-content-body:not([dir='rtl']) blockquote {
            padding-left: 1rem;
            margin-left: 1.5rem;
            border-left: 2px solid #ccc;
        }
        .mce-content-body[dir='rtl'] blockquote {
            padding-right: 1rem;
            margin-right: 1.5rem;
            border-right: 2px solid #ccc;
        }
    }

    &__block {
        display: flex;
        height: 0;
        font: inherit;
        visibility: hidden;
    }

    &__extra {
        position: absolute;
        right: 2px;
        bottom: 0;
        line-height: @line-height;
    }
}
</style>
