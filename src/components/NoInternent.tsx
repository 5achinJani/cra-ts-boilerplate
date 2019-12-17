import React from 'react';
import { images } from 'config/images';
import { StyledNoInternent } from 'styled/NoInternent';

export const NoInternent: React.FC = () => {
  return (
    <StyledNoInternent>
      <div className="NoInternent__Main">
        <div className="NoInternent__row">
          <div className="NoInternent__icon">
            <img src={images.iconnointernent} alt="nointernent" />
          </div>
          <div className="NoInternent__text__block">
            <div className="NoInternent__text__title">
              You are not connected to the internet.
            </div>
            <div className="NoInternent__text__des">
              You need an internet connection to use this app. Things you can
              check or try: Do you have a data plan for your device? Do you have
              bars showing a connection? Try moving around a little, in case
              you’re in a dead spot. Is Wi-fi turned on? Is Wi-fi available near
              you?
            </div>
            <div className="NoInternent__text__link">Try Again</div>
          </div>
        </div>
      </div>
    </StyledNoInternent>
  );
};
