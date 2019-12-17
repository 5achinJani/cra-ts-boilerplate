import styled from 'styled-components';

export const StyledNoInternent = styled.div`
  .NoInternent__row {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    height: calc(100vh - 61px);
    .NoInternent__text__block {
      max-width: 90%;
      margin: 0 auto;
    }
    .NoInternent__icon {
      background: #fff;
      border-radius: 50%;
      height: 160px;
      width: 160px;
      overflow: hidden;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0px 0px 3px rgba(0, 0, 0, 0.15);
    }
    .NoInternent__text__title {
      font-size: 22px;
      line-height: 32px;
      color: #4a4a4a;
      padding-bottom: 16px;
    }
    .NoInternent__text__des {
      font-size: 16px;
      line-height: 26px;
      color: #909090;
      padding-bottom: 16px;
    }
    .NoInternent__text__link {
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
      font-size: 16px;
      line-height: 26px;
      color: #00acee;
      cursor: pointer;
    }
  }
`;
