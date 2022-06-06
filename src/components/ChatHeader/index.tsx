import classes from './chat-header.module.scss'

export function ChatHeader() {
  return (
    <div className={classes.chatHeader}>
      <div role="button" className={classes.logoContainer}>
        <div className={classes.logoContent}>
        <svg width="212" height="212" viewBox="0 0 212 212" fill="none">
          <path d="M105.946.25C164.318.25 211.64 47.596 211.64 106s-47.322 105.75-105.695 105.75C47.571 211.75.25 164.404.25 106S47.571.25 105.946.25Z" fill="#DFE5E7"></path>
          <path clip-rule="evenodd" d="M102.282 77.286c0 10.671-8.425 19.285-18.94 19.285s-19.003-8.614-19.003-19.285C64.339 66.614 72.827 58 83.342 58s18.94 8.614 18.94 19.286Zm48.068 2.857c0 9.802-7.738 17.714-17.396 17.714-9.658 0-17.454-7.912-17.454-17.714s7.796-17.715 17.454-17.715c9.658 0 17.396 7.913 17.396 17.715Zm-67.01 29.285c-14.759 0-44.34 7.522-44.34 22.5v11.786c0 3.536 2.85 4.286 6.334 4.286h76.012c3.484 0 6.334-.75 6.334-4.286v-11.786c0-14.978-29.58-22.5-44.34-22.5Zm43.464 1.425c.903.018 1.681.033 2.196.033 14.759 0 45 6.064 45 21.043v9.642c0 3.536-2.85 6.429-6.334 6.429h-32.812c.697-1.993 1.141-4.179 1.141-6.429l-.245-10.5c0-9.561-5.614-13.213-11.588-17.1-1.39-.904-2.799-1.821-4.162-2.828a.843.843 0 0 1-.059-.073.594.594 0 0 0-.194-.184c1.596-.139 4.738-.078 7.057-.033Z"></path>
        </svg>
        </div>
      </div>
      <div role="button" className={classes.titleContainer}>
        <div className={classes.nameContainer}>
          <div className={classes.name}>
            <span title="+90 536 719 04 97">AlertaCar</span>
          </div>
        </div>
        <div className={classes.status}>
          <span title="last seen today at 6:15 PM" className="O90ur">Online</span>
        </div>
      </div>
      <div className={classes.actionsContainer}>
        <div className={classes.actionContainer}>
          <div role="button" title="Menu">
            {/* <span data-icon="menu"> */}
              <svg id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24">
                <path fill="#263238" fill-opacity=".6" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z">
                </path>
              </svg>
            {/* </span> */}
          </div>
        </div>
      </div>
    </div>
  )
}