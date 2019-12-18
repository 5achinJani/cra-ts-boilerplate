import React, { useMemo } from 'react';
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';

type IProps = {
  count: number;
};

export const UserCardSkeleton: React.FC<IProps> = props => {
  const { count } = props;

  const renderSkeletons = useMemo(() => {
    const skeletons: any = [];

    for (let index = 0; index < count; index++) {
      skeletons.push(
        <SkeletonTheme color="#eee" highlightColor="white" key={index}>
          <Skeleton circle={true} height={50} width={50} />
          <Skeleton height={20} width={170} />
        </SkeletonTheme>
      );
    }

    return skeletons;
  }, [count]);

  return renderSkeletons;
};

UserCardSkeleton.defaultProps = {
  count: 1
};
