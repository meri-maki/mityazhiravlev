import { ButtonHTMLAttributes, FC } from 'react'
import { classNames } from 'shared/lib/classNames/classNames'
import cls from './Button.module.scss'

export enum ButtonTheme {
    ICON = 'icon',
    PRIMARY = 'primary',
    LINK= 'link',
    ACCORDEON= 'accordeon',
    NAVIGATION = 'navigation'

}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string
    theme?: ButtonTheme
    address?: string
    click?: Function
}
export const Button: FC<ButtonProps> = (props) => {
    const { children, className, address, click, theme, ...otherProps } = props
    const handleClick = (address: string) => {
        window.open(address, '_blank')
    }
    return (
        <button
            type="button"
            className={classNames(cls.button, { }, [cls[theme], className])}
            onClick={() => (address ? handleClick(address) : click())}
            {...otherProps}
        >
            {children}
        </button>
    )
}
