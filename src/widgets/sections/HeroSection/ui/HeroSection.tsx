/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import Portrait from 'shared/assets/images/portrait.png'
import PortraitBW from 'shared/assets/images/portrait-bw.png'

import cls from './HeroSection.module.scss'

interface HeroSectionProps {
 className?: string;
}

export const HeroSection = ({ className }: HeroSectionProps) => {
    const { t } = useTranslation()
    return (
        <section className={classNames(cls.HeroSection, {}, [])} data-scroll-section>
            <div className={cls.spacer} />
            <div className={cls.blur} />

            <div className={cls.heroMain}>
                <h1>
                    {t('hero-h1')}
                </h1>
                <img src={PortraitBW} alt="Mitya Zhuravlev" />
            </div>
            <div className={cls.heroTextContainer} data-scroll data-scroll-class="hero-appear">
                <h6>
                    {t('hero-text')}
                </h6>
                <div className={cls.current}>
                    <p className="p2">{t('hero-current')}</p>
                    <p className="p2">{t('hero-current-company')}</p>
                </div>
            </div>
        </section>
    )
}
