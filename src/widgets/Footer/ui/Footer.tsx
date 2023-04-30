import cls from './Footer.module.scss'

interface FooterProps {
  className?: string
}
export const Footer = ({ className }: FooterProps) => (
    <div className={cls.footer}> </div>
)
