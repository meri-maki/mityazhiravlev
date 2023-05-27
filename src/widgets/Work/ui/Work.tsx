import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Work.module.scss'

interface WorkProps {
 className?: string;
 title: string
 text1: string
 text2: string

}

export const Work = (props: WorkProps) => {
    const { title, className, text1, text2 } = props
    const { t } = useTranslation()

    return (
        <div className={classNames(cls.Work, {}, [className])}>
            <h2>{t(title)}</h2>
            <p>{t(text1)}</p>
            <p>{t(text2)}</p>
        </div>
    )
}
