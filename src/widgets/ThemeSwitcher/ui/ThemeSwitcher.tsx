import Moon from 'shared/assets/icons/moon.svg'

import { classNames } from 'shared/lib/classNames/classNames'
import { Theme, useTheme } from 'app/providers/ThemeProvider'
import cls from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
 className?: string;
 id?: string
}

export const ThemeSwitcher = ({ className, id }: ThemeSwitcherProps) => {
    const { theme, toggleTheme } = useTheme()

    const isDark = theme === Theme.DARK
    return (
        <div className={classNames(cls.ThemeSwitcher, {}, [])}>
            <div className={cls.switchIcon}><Moon /></div>

            <label
                className={cls.switchLabel}
                htmlFor={id}
            >
                <input
                    onChange={toggleTheme}
                    className={cls.switchCheckbox}
                    id={id}
                    type="checkbox"
                />
                <span className={`${cls.switchButton} ${isDark && cls.active}`} />
            </label>

        </div>

    )
}
