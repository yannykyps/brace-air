import React from 'react'

const Title = ({title, subTitle}) => {
    return (<>
      <h2 className="section-title">{title || "default title"}</h2>
      {subTitle && <h4 className="section-subtitle">{subTitle || "default title"}</h4>}
    </>
    )
}

export default Title
