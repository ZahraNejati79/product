const Wrapper = (WrapperComponent, className) => {
  return (props) => {
    return (
      <div className={className}>
        <WrapperComponent {...props} />
      </div>
    );
  };
};

export default Wrapper;
