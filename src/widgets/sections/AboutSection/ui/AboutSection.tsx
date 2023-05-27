import { useTranslation } from 'react-i18next'

import { classNames } from 'shared/lib/classNames/classNames'
import cls from './AboutSection.module.scss'

interface AboutSectionProps {
 className?: string;
}

export const AboutSection = ({ className }: AboutSectionProps) => {
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.AboutSection, {}, [])} data-scroll-section>
            <h6>{t('info-1')}</h6>
            <h6>{t('info-2')}</h6>
        </section>
    )
}
