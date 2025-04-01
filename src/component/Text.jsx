const Text = ({ children, style = {} }) => {
  return <p style={{ margin: 0, ...style }}>{children}</p>
}

export default Text
