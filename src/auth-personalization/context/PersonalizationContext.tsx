import React, { createContext, useContext, useState, useEffect } from 'react';
import { PersonalizationPreference } from '../types';
import { PersonalizationService } from './personalizationService';

interface PersonalizationContextType {
  preferences: PersonalizationPreference | null;
  loading: boolean;
  savePreferences: (prefs: PersonalizationPreference) => Promise<void>;
  clearPreferences: () => Promise<void>;
}

export const PersonalizationContext = createContext<PersonalizationContextType | undefined>(undefined);

export const PersonalizationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [preferences, setPreferences] = useState<PersonalizationPreference | null>(null);
  const [loading, setLoading] = useState(true);
  const personalizationService = new PersonalizationService();

  useEffect(() => {
    const storedPreferences = personalizationService.getPreferences();
    if (storedPreferences) {
      setPreferences(storedPreferences);
    }
    setLoading(false);
  }, []);

  const savePreferences = async (prefs: PersonalizationPreference) => {
    setLoading(true);
    try {
      await personalizationService.savePreferences(prefs);
      setPreferences(prefs);
    } finally {
      setLoading(false);
    }
  };

  const clearPreferences = async () => {
    setLoading(true);
    try {
      await personalizationService.clearPreferences();
      setPreferences(null);
    } finally {
      setLoading(false);
    }
  };

  return (
    <PersonalizationContext.Provider value={{ preferences, loading, savePreferences, clearPreferences }}>
      {children}
    </PersonalizationContext.Provider>
  );
};

export const usePersonalization = () => {
  const context = useContext(PersonalizationContext);
  if (context === undefined) {
    throw new Error('usePersonalization must be used within a PersonalizationProvider');
  }
  return context;
};
