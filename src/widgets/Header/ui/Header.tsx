import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import Menu from 'shared/assets/icons/menu.svg'
import { classNames } from 'shared/lib/classNames/classNames'
import { Button, ButtonTheme } from 'shared/ui/Button/Button'
import { LangSwitcher } from 'widgets/LangSwitcher'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Header.module.scss'

interface HeaderProps {
  className?: string
}
export const Header = ({ className }: HeaderProps) => {
    const { t } = useTranslation()
    const [scrollClass, setScrollClass] = useState(false)

    const handleScroll = () => {
    // check the scroll position to determine if we need to apply the class
        if (window.pageYOffset > 10) {
            setScrollClass(true)
        } else {
            setScrollClass(false)
        }
    }
    useEffect(() => {
    // add an event listener to the window object to track scrolling
        window.addEventListener("scroll", handleScroll)

        // cleanup function to remove the event listener when the component unmounts
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const [menuOpened, setMenuOpened] = useState(false)
    const onToggle = () => {
        setMenuOpened((prev: boolean) => !prev)
    }
    return (
        <header className={classNames(cls.header, { [cls.scrolled]: scrollClass })} data-scroll-sticky>
            <Button
                theme={ButtonTheme.ICON}
                className={classNames(cls.menu, { [cls.menuOpened]: menuOpened })}
                onClick={onToggle}
            >
                <Menu />
            </Button>
            {menuOpened ? (
                <div className={classNames(cls.mobileMenu, { [cls.menuOpened]: menuOpened })}>
                    <Button theme={ButtonTheme.NAVIGATION}>{t('link-about')}</Button>
                    <Button theme={ButtonTheme.NAVIGATION}>{t('link-projects')}</Button>
                    <Button theme={ButtonTheme.NAVIGATION}>{t('link-contacts')}</Button>
                </div>
            )
                : (
                    <div className={classNames(cls.switchers, { [cls.menuOpened]: menuOpened })}>
                        <LangSwitcher />
                        <ThemeSwitcher />
                    </div>
                )}

        </header>
    )
}
