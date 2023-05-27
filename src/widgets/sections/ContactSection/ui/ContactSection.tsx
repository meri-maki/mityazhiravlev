/* eslint-disable i18next/no-literal-string */
import { useTranslation } from 'react-i18next'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import cls from './ContactSection.module.scss'

interface ContactSectionProps {
 className?: string;
}

export const ContactSection = ({ className }: ContactSectionProps) => {
    const { t } = useTranslation()

    return (
        <section className={classNames(cls.ContactSection, {}, [className])} data-scroll-section>
            <h3>{t('contact-header')}</h3>
            <div className={cls.links}>
                <Button theme={ButtonTheme.LINK} address="mailto:mityazhuravlev@gmail.com">{t('contact-mail')}</Button>
                <Button theme={ButtonTheme.LINK} address="https://t.me/mityazhur">{t('contact-telegram')}</Button>
                <Button theme={ButtonTheme.LINK}>{t('contact-cv')}</Button>
            </div>
        </section>
    )
}
