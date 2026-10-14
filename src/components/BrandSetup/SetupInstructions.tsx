import React from 'react';

interface SetupInstructionsProps {
  installText: string;
  helpText: string;
  showSupportLink?: boolean;
  supportLinkText?: string;
  onSupportLinkClick?: () => void;
}

const SetupInstructions: React.FC<SetupInstructionsProps> = ({
  installText,
  helpText,
  showSupportLink,
  supportLinkText,
  onSupportLinkClick,
}) => {
  return (
    <div className="mb-8">
      <p className="text-[16px] sm:text-[18px] text-[#1e1e1e] leading-relaxed font-normal mb-8">
        {installText}
      </p>

      <h3 className="text-[19px] sm:text-[21px] font-semibold text-[#1a1a1a] mb-2 flex items-center flex-wrap gap-2">
        <span>{helpText}</span>
        {showSupportLink && (
          <button
            type="button"
            onClick={onSupportLinkClick}
            className="text-blue-600 hover:underline text-[17px] font-medium ml-1 bg-transparent border-none p-0 cursor-pointer"
          >
            {supportLinkText}
          </button>
        )}
      </h3>
    </div>
  );
};

export default SetupInstructions;
