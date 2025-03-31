const Text = ({ children, className = '', style = {} }) => {
  return (
    <p className={className} style={{ margin: 0, ...style }}>
      {children}
    </p>
  )
}

export default Text
