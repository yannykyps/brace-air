import React from 'react'

const Title = ({title, titleH1, subTitle}) => {
    return (<>
      {title && <h2 className="section-title">{title || "default title"}</h2>}
      {titleH1 && <h1 className="section-title">{titleH1 || "default title"}</h1>}
      {subTitle && <h4 className="section-subtitle">{subTitle || "default title"}</h4>}
    </>
    )
}

export default Title
