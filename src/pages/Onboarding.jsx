import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

import Footer from '../components/onboardingPage/Footer';
import Step3Page from '../components/onboardingPage/Step3Page';
import Step2Page from '../components/onboardingPage/Step2Page';
import Step1Page from '../components/onboardingPage/Step1Page';
import { auth } from '../Firebase';
import Header from '../components/onboardingPage/Header';
import Loader from '../components/Loader';

function Onboarding() {
  const [step, setStep] = useState(1);
  const [, loading] = useAuthState(auth);
  const navigate = useNavigate();

  const headerActions = {
    1: { nextButtonText: 'Continue', nextButtonAction: () => setStep(2) },
    2: { nextButtonText: 'Continue', nextButtonAction: () => setStep(3) },
    3: { nextButtonText: 'Finish', nextButtonAction: () => navigate('/') },
  };

  return loading ? (
    <Loader />
  ) : (
    <div className='h-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark md:bg-offset bg-background dark:bg-offsetDark'>
      <div className='flex h-full min-h-[100vh]'>
        <div className='lg:pr-sm lg:pb-sm lg:pt-sm grow'>
          <div className='h-full overflow-clip bg-clip-border border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark dark:bg-offsetDark'>
            <div className='w-full h-full mx-auto  max-w-screen-md md:px-lg  px-md'>
              <div className='md:flex items-center justify-center h-full  border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-transparent'>
                <div className='rounded-lg md:border md:p-lg md:shadow-sm w-full border-borderMain/60 dark:border-borderMainDark/80 divide-borderMain/60 dark:divide-borderMainDark/80 ring-borderMain dark:ring-borderMainDark bg-background dark:bg-backgroundDark'>
                  <Header
                    key={step}
                    nextButtonText={
                      headerActions[step.toString()].nextButtonText
                    }
                    nextButtonAction={
                      headerActions[step.toString()].nextButtonAction
                    }
                    step={step}
                  />

                  {step === 1 && <Step1Page />}
                  {step === 2 && <Step2Page />}
                  {step === 3 && <Step3Page />}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Onboarding;
