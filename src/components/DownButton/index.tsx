import classes from './down-button.module.scss'

export function DownButton() {
  return (
    <div
      className={classes.downButton}
      role="button"
      style={{ transform: 'scaleX(1) scaleY(1)', opacity: 1 }}
    >
      <span>
        <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 21 21" width="21" height="21">
          <path fill="#263238" fill-opacity=".33" d="M4.8 6.1l5.7 5.7 5.7-5.7 1.6 1.6-7.3 7.2-7.3-7.2 1.6-1.6z">
          </path>
        </svg>
      </span>
    </div>
  )
}