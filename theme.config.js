import { BiLogoInstagramAlt } from 'react-icons/bi'
const YEAR = new Date().getFullYear()

export default {
  footer: (
    <footer
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <small>
        <time>{YEAR}</time> © Aleksandra Bednarska.
      </small>
      <small>
        <a
          style={{ display: 'flex', alignItems: 'center', height: '20px' }}
          target='_blank'
          href='https://www.instagram.com/abednarska3/'
        >
          <img
            style={{ width: '15px', marginRight: '5px' }}
            src='/images/ig-logo.svg'
          />{' '}
          instagram
        </a>
      </small>
      <style jsx>{`
        footer {
          margin-top: 0;
        }
        a {
          float: right;
        }
      `}</style>
    </footer>
  ),
}
