import type { Metadata } from "next";
import { Reveal } from "@/components/reveal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How Orbit stores your personal data, handles backups, and lets you delete your records.",
};

export default function PrivacyPolicy() {
  return <>
    <section className="inner-hero privacy-hero">
      <div className="container">
        <Reveal>
          <span className="eyebrow">ORBIT / PRIVACY</span>
          <h1>Your space.<br /><em>Your data.</em></h1>
          <p>This policy explains what happens to the information you put into the Orbit Android app.</p>
          <span className="privacy-updated">Last updated: October 22, 2026</span>
        </Reveal>
      </div>
    </section>
    <article className="privacy-content section">
      <div className="container privacy-layout">
        <div className="privacy-summary">
          <span className="eyebrow">AT A GLANCE</span>
          <p>Orbit works offline. Your personal records are stored on your device, and the app does not require an account or offer cloud sync.</p>
        </div>
        <div className="privacy-details">
          <section>
            <h2>Information you add</h2>
            <p>Orbit saves the profile name, tasks, habits, notes, transactions, budgets, categories, settings, and activity you enter or create in a local database on your device. The app uses this information to show your workspace and its features.</p>
          </section>
          <section>
            <h2>No app tracking</h2>
            <p>Orbit does not require an account and does not use analytics, crash reporting, ads, or cloud sync. Orbit does not send the records you enter to its developer or an app server.</p>
          </section>
          <section>
            <h2>Backups and sharing</h2>
            <p>If you choose to export a backup, Orbit creates a JSON file containing your app data and opens your device’s share sheet. You choose where to save or send that file. Backup files are not encrypted by Orbit, so keep them somewhere you trust. Restoring a backup replaces the app data on your device.</p>
            <p>Separately, Android’s own backup settings may back up app data through your device’s backup provider. Those backups are controlled by your device settings, not by Orbit’s export feature.</p>
          </section>
          <section>
            <h2>Your choices</h2>
            <p>You can edit or delete individual records in the app, clear personal records from Settings, or uninstall Orbit to remove its local app data. Backups you exported or device backups may remain until you delete them from where they are stored.</p>
          </section>
          <section>
            <h2>Website and updates</h2>
            <p>Visiting the Orbit website is separate from using the app. The website’s hosting provider may process basic connection information needed to serve the site. If Orbit’s data practices change, this page will be updated.</p>
          </section>
          <section>
            <h2>Questions</h2>
            <p>For privacy questions, you can <a href="https://github.com/v9mirza/Orbit-app/issues">contact the project on GitHub</a>. GitHub issues are public, so please do not include personal information there.</p>
          </section>
        </div>
      </div>
    </article>
  </>;
}
