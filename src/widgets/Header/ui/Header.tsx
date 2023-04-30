import Menu from 'shared/assets/icons/menu.svg'
import cls from './Header.module.scss'

interface HeaderProps {
  className?: string
}
export const Header = ({ className }: HeaderProps) => (
    <header className={cls.header}>
        <Menu />
    </header>
)
