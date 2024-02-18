import React from 'react';
import classNames from 'classnames';
import LegacyButton from '../LegacyButton';
import Icon from '../Icon';
const landing = {
  minHeight: 'calc(100vh - 52px)',
  scrollBehavior: 'smooth',
};

const LandingArea = () => {
  return (
    <div
      className={classNames(
        'flex-grow',
        'bg-primary-dark',
        'p-8',
        'text-white',
        'flex',
        'justify-center',
        'place-items-center'
      )}
      style={landing}
    >
      <div className="text-center">
        {/* Landing area content goes here */}
        <h1 className="text-primary-light text-6xl font-bold">AI-Enhanced DICOM Viewer</h1>
        <h2 className="mb-4 text-4xl">Discover the future of medical imaging!!</h2>
        <p className="text-xl">
          A revolutionary solution designed for precision and accessibility.
        </p>
        <p className="mb-4 text-xl">
          Low Dose CT Scan Denoising, MRI Motion Artifact Mitigation, and Multi-Planar
          Reconstruction (MPR) View
        </p>
        <a
          href="/local"
          className="mx-2"
        >
          <LegacyButton
            rounded="full"
            endIcon={<Icon name="launch-arrow" />}
          >
            Upload My DICOM Files
          </LegacyButton>
        </a>
        <a
          href="#studyList"
          className="mx-2"
        >
          <LegacyButton
            rounded="full"
            endIcon={<Icon name="launch-arrow" />} // launch-arrow | launch-info
          >
            View Some Examples
          </LegacyButton>
        </a>
      </div>
    </div>
  );
};

export default LandingArea;
