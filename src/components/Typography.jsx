const Typography = (props) => {

  const { children, variant } = props
  const LabelType = {
    h1: <h1 className="text-3xl font-bold">{children}</h1>,
    h2: <h2 className="font-medium text-lg text-balance">{children}</h2>,
    h3: <h2>{children}</h2>,
    h4: <h2>{children}</h2>,
    h5: <h2>{children}</h2>,
    h6: <h2>{children}</h2>,
    p: <p>{children}</p>,
    span: <span>{children}</span>,
    label: <label>{children}</label>,
  }

  return LabelType[variant]
}

export default Typography