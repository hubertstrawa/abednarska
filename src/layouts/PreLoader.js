import { Fragment } from 'react'
const PreLoader = () => {
  return (
    <Fragment>
      {/* Preloader */}
      <div className='preloader'>
        <div className='centrize full-width'>
          <div className='vertical-center'>
            <div className='spinner-logo'>
              <img
                src='/assets/images/logo_ab.svg'
                alt='Aleksandra Bednarska - lektor angielskiego logo'
              />
              <div className='spinner-dot' />
              <div className='spinner spinner-line' />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}
export default PreLoader
