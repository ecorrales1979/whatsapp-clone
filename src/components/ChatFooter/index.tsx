import classes from './chat-footer.module.scss'

export function ChatFooter() {
  return (
    <footer tabIndex={-1} className={classes.chatFooter}>
      <div className={classes.footerContent}>
        <div tabIndex={-1} className={classes.inputContainer}>
          <div tabIndex={-1} className={classes.inputBox}>
            <div className={classes.inputLabel} style={{visibility: 'visible'}}>Type a message</div>
            <div className={classes.input} contentEditable="true" data-tab="1" spellCheck="true"></div>
          </div>
        </div>
        <div className={classes.sendButtonContainer}>
          <div className={classes.sendButtonContent}>
            <span>
              <button>
                <span data-icon="ptt">
                  <svg xmlns="http://www.w3.org/2000/svg" style={{isolation:'isolate',width: '24px',height: '24px',fill: '#8a8f92'}} viewBox="0 0 64 64">
                    <g clip-path="url(#a)">
                      <path d=" M 8.216 36.338 L 26.885 32.604 C 28.552 32.271 28.552 31.729 26.885 31.396 L 8.216 27.662 C 7.104 27.44 6.021 26.356 5.799 25.245 L 2.065 6.576 C 1.731 4.908 2.714 4.133 4.259 4.846 L 61.228 31.139 C 62.257 31.614 62.257 32.386 61.228 32.861 L 4.259 59.154 C 2.714 59.867 1.731 59.092 2.065 57.424 L 5.799 38.755 C 6.021 37.644 7.104 36.56 8.216 36.338 Z "></path>
                    </g>
                  </svg>
                </span>
              </button>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}