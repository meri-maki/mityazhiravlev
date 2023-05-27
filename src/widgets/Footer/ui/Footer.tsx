/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './Footer.module.scss'

interface FooterProps {
 className?: string;
}

export const Footer = ({ className }: FooterProps) => {
    const { t } = useTranslation()

    return (
        <footer className={classNames(cls.Footer, {}, [className])} data-scroll-section>

            <div className={cls.links}>
                <Button theme={ButtonTheme.LINK} address="https://instagram.com/mityazhuravlew">{t('contact-instagram')}</Button>
                <Button theme={ButtonTheme.LINK} address="https://www.youtube.com/@mityazhuravlev">{t('contact-youtube')}</Button>
                <Button theme={ButtonTheme.LINK} address="https://www.linkedin.com/in/mityazhuravlev/">{t('contact-linkedin')}</Button>
            </div>
            <p>
                {t('footer-info')}
                <a href="https://ana-zhuravleva-portfolio.vercel.app/" target="_blank" rel="noreferrer" className="link">{t('footer-ana')}</a>
            </p>
        </footer>
    )
}
