import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './HeroSection.module.scss'

interface HeroSectionProps {
 className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    const { t } = useTranslation()
    return (
        <section className={classNames(cls.HeroSection, {}, [])}>

            <h1>
                {t('hero-h1')}
            </h1>
            <h6>
                {t('hero-text')}
            </h6>
            <div>
                <p className="p2">{t('hero-current')}</p>
                <p className="p2">{t('hero-current-company')}</p>
            </div>

            <h6>{t('info-1')}</h6>
            <h6>{t('info-2')}</h6>

        </section>
    )
}
