import './styles/global.css'
import styles from './styles/Signup.module.css'
import Form from './components/Form'
function App() {

  return (
    <>
      <div className={styles.background}>
        <div className={styles.container}>
          <div className={styles.infoText}>
            <h1>Learn to code by watching others</h1>
            <p>
              See how experienced developers solve problems in real-time.</p>
            <p>Watching scripted tutorials is great, but understanding how developers think is invaluable.</p>
          </div>

          <div className={styles.formWrapper}>
            <div className={styles.freeTrialBtn}>
              <p><strong>Try it free 7 days</strong> then $20/mo. thereafter</p>

            </div>
            <Form />
          </div>
        </div>
      </div>

    </>
  )
}

export default App
