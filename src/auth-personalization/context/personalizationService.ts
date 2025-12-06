import { PersonalizationPreference } from '../types';

const STORAGE_KEY = 'userPersonalizationPreferences';

export class PersonalizationService {
  private preferences: PersonalizationPreference | null = null;

  constructor() {
    this.loadPreferences();
  }

  private loadPreferences(): void {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      this.preferences = JSON.parse(stored);
    }
  }

  async savePreferences(preferences: PersonalizationPreference): Promise<void> {
    console.log('Saving personalization preferences:', preferences);
    return new Promise((resolve) => {
      setTimeout(() => {
        this.preferences = preferences;
        localStorage.setItem(STORAGE_KEY, JSON.stringify(preferences));
        resolve();
      }, 500);
    });
  }

  getPreferences(): PersonalizationPreference | null {
    return this.preferences;
  }

  async clearPreferences(): Promise<void> {
    console.log('Clearing personalization preferences');
    return new Promise((resolve) => {
      setTimeout(() => {
        this.preferences = null;
        localStorage.removeItem(STORAGE_KEY);
        resolve();
      }, 200);
    });
  }
}
