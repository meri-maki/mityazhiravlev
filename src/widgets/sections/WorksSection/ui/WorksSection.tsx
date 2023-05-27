/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Work } from 'widgets/Work'
import cls from './WorksSection.module.scss'

interface WorksSectionProps {
 className?: string;
}

export const WorksSection = ({ className }: WorksSectionProps) => {
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.WorksSection, {}, [className])} data-scroll-section>
            <h3>{t('works-header')}</h3>
            <Work title="leroy-header" text1="leroy-1" text2="leroy-2" />
            <Work title="ingrad-header" text1="ingrad-1" text2="ingrad-2" />
        </section>
    )
}
