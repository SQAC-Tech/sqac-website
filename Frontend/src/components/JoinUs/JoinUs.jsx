import React from 'react';
// Recruitments are closed — form kept for the next drive.
// To reopen, swap RecruitmentClosed back for NaturalLanguageForm.
// import NaturalLanguageForm from './NaturalLanguageForm';
import RecruitmentClosed from './RecruitmentClosed';

function JoinUs() {
  return (
    <div className="min-h-screen">
      {/* <NaturalLanguageForm /> */}
      <RecruitmentClosed />
    </div>
  )
}

export default JoinUs
