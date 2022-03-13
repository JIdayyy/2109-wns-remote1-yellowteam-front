import { Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'

interface IBreadcrumb {
  breadcrumb: string
  href: string
}
const convertBreadcrumb = (string: string) => string.toUpperCase()

interface IProps {
  disabled: boolean
}

const Breadcrumbs = ({ disabled }: IProps): JSX.Element => {
  const router = useLocation()
  const [breadcrumbs, setBreadcrumbs] = useState<IBreadcrumb[]>([])

  useEffect(() => {
    const querySplited = router.pathname.split('?')
    const linkPath = querySplited[0].split('/')
    linkPath.shift()
    const pathArray = linkPath.map((path, i) => ({
      breadcrumb: path.replace(/-/g, ' '),
      href: `/${linkPath.slice(0, i + 1).join('/')}${
        querySplited[1] ? `?${querySplited[querySplited.length - 1]}` : ''
      }`,
    }))

    setBreadcrumbs(pathArray)
  }, [router])
  return (
    <nav>
      <ol>
        {breadcrumbs.length >= 1 &&
          breadcrumbs[0].breadcrumb &&
          breadcrumbs.map((breadcrumb, index) => (
            <li
              key={breadcrumb.href}
              className={`${
                !disabled &&
                index !== breadcrumbs.length - 1 &&
                `hover:text-gray-400  `
              }`}
            >
              {!disabled && index !== breadcrumbs.length - 1 ? (
                <Link href={breadcrumb.href}>
                  <a href="replace" className="hover:underline">
                    {convertBreadcrumb(breadcrumb.breadcrumb)}
                  </a>
                </Link>
              ) : (
                <span>{convertBreadcrumb(breadcrumb.breadcrumb)}</span>
              )}
              <span className="font-light mx-2">{' | '}</span>
            </li>
          ))}
      </ol>
    </nav>
  )
}

export default Breadcrumbs
