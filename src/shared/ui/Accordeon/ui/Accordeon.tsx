/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import { classNames } from 'shared/lib/classNames/classNames'
import Minus from 'shared/assets/icons/minus.svg'
import Plus from 'shared/assets/icons/plus.svg'
import { useRef, useState } from 'react'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { useTranslation } from 'react-i18next'
import { CSSTransition } from 'react-transition-group'
import cls from './Accordeon.module.scss'

interface AccordeonProps {
 className?: string
 number: number
 title: string
 text: string
}

export const Accordeon = (props: AccordeonProps) => {
    const { t } = useTranslation()
    const nodeRef = useRef(null)
    const [isOpened, setIsOpened] = useState(true)
    console.log(isOpened)

    const { className, number, title, text } = props
    return (
        <div className={classNames(cls.Accordeon, {}, [className])}>
            <div className={cls.main} onClick={() => setIsOpened(!isOpened)}>
                <div className={cls.titles}>
                    <h5 className={cls.titleNumber}>
                        0
                        {number}
                        .
                    </h5>
                    <h5 className={cls.titleText}>{t(title)}</h5>
                </div>
                <Button className={cls.icon} theme={ButtonTheme.ACCORDEON} onClick={() => setIsOpened(!isOpened)}>
                    {isOpened ? <Minus /> : <Plus />}
                </Button>
            </div>
            <CSSTransition
                in={isOpened}
                timeout={300}
                nodeRef={nodeRef}
                classNames={{
                    enterActive: cls.textEnterActive,
                    enterDone: cls.textEnterDone,
                    exitActive: cls.textExit,
                    exitDone: cls.textExitActive
                }}
            >
                {(state) => (<p ref={nodeRef} className={cls.text}>{t(text)}</p>)}

            </CSSTransition>
        </div>
    )
}
