const InteractionIcon = () => {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        verticalAlign: 'middle',
      }}
    >
      <svg
        data-icon="ActionTrigger"
        aria-hidden="true"
        focusable="false"
        width="12"
        height="12"
        viewBox="0 0 12 12"
        className="bem-Svg"
        style={{ display: 'block' }}
      >
        <defs>
          <path id="wf-svg-ActionTrigger-a" d="M6 7H2.5L6 1.5V5h3.5L6 10.5z"></path>
        </defs>
        <g fill="none" fillRule="evenodd">
          <rect width="12" height="12" fill="#008547" rx="1"></rect>
          <use fill="#FFF" opacity=".9" xlinkHref="#wf-svg-ActionTrigger-a"></use>
        </g>
      </svg>
      &nbsp;
    </span>
  )
}

export default InteractionIcon
