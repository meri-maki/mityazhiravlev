/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import { Accordeon } from 'shared/ui/Accordeon/ui/Accordeon'
import cls from './ProcessSection.module.scss'

interface ProcessSectionProps {
 className?: string;
}

export const ProcessSection = ({ className }: ProcessSectionProps) => {
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.ProcessSection, {}, [])} data-scroll-section>
            <h3>{t('process-header')}</h3>
            <h6>{t('process-text')}</h6>
            <Accordeon number={1} title="process-1" text="process-1-text" />
            <Accordeon number={2} title="process-2" text="process-2-text" />
            <Accordeon number={3} title="process-3" text="process-3-text" />
            <Accordeon number={4} title="process-4" text="process-4-text" />
        </section>
    )
}
