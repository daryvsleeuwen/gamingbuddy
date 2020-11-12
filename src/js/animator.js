export default class Animator {
    constructor() {
        this.borderbound = window.innerWidth * 0.10;
        this.boxwidth = window.innerWidth;
        this.boxheight = window.innerHeight;
        this.boundcoords = {
            minX: 0 + this.borderbound,
            maxX: this.boxwidth - this.borderbound,
            minY: 0 + this.borderbound,
            maxY: this.boxheight - this.borderbound
        }

        this.easing = {
            strong: 'cubic-bezier(0.08, 0.84, 0.54, 1.02)',
            in: 'cubic-bezier(.65,.1,.87,.28)',
            inOut: 'cubic-bezier(0.83, 0, 0.17, 1)',
            out: 'cubic-bezier(0,0,.58,1)',
            strongOut: 'cubic-bezier(.19,.75,.31,.96)',
            bounce: 'cubic-bezier(.15,1.1,.44,1.29)'
        }

        this.defaultMatrixValues = {
            scale: {
                matrixPositions: [0, 3],
                defaultValue: '1',
                valueType: ''
            },
            skew: {
                matrixPositions: [1, 2],
                defaultValue: '0',
                valueType: 'deg'

            },
            translate: {
                matrixPositions: [4, 5],
                defaultValue: '0',
                valueType: 'px'
            }
        }
    }

    animateCss = (settings, endcallback) => {
        const element = settings.element;

        if (!element) {
            console.log(element)
            throw 'You are trying to animate a non HTML element';
        } else {
            const duration = parseFloat(settings.duration);
            const type = settings.cssType;
            let typeprefix = '';
            const easing = this.easing[settings.easing];
            const value = settings.value;

            if (duration !== 'instant' || duration !== 0) {
                element.style.transition = `all ${duration}ms ${easing || 'linear'}`;
            }

            if (type === 'transform') {
                const matrix = getComputedStyle(element).getPropertyValue('transform');
                const matrixType = matrix.includes('3d') ? '3d' : '2d';
                const matrixValues = matrix.match(/matrix.*\((.+)\)/)[1].split(', ');

                if (matrixType === '2d') {
                    for (const value in this.defaultMatrixValues) {
                        let object = this.defaultMatrixValues[value];
     
                        let positions = object.matrixPositions;
                        if(matrixValues[positions[0]] !== object.defaultValue && matrixValues[positions[1]] !== object.defaultValue){
                            typeprefix += `${value}(${matrixValues[positions[0]]}${object.valueType},${matrixValues[positions[1]]}${object.valueType})`;
                        }
                    }
                }
            }

            if(value === 'reset'){              
                element.style[type] = '';
            }

            element.style[type] = `${typeprefix} ${value}`;

            // if (endcallback != null && typeof endcallback === 'function') {
            //     element.addEventListener('transitionend', () => {
            //         endcallback();
            //     });
            // }
            if (endcallback != null && typeof endcallback === 'function') {
                setTimeout(() => {
                    endcallback();
                }, duration * 0.9);
            }
        }
    }
}