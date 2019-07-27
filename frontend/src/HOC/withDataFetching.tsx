import React, { useEffect, useState } from 'react';
import Style from './withDataFetching.style';

const withDataFetching = <Props extends any>(
  fetchFunction: (props: Props) => any,
  shouldCallEffect: (props: Props) => any[],
  dispatchFunctionName: string = 'dispatchData',
) => (BaseComponent: React.ComponentType<Props>) => (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
  const [data, setData] = useState<any>();
  const [error, setError] = useState<string | null>();
  useEffect(() => {
    props.requestData(...shouldCallEffect(props));
  }, [...shouldCallEffect(props)]);
  return (
    <Style.Container>
      {loading && (
        <Style.Loader src="https://trello-attachments.s3.amazonaws.com/5d0ce56e059f0263f02e0155/5d0ce56e059f0263f02e016f/x/f020b178de9e22691149d450613f8f52/loader.svg" />
      )}
      {error && (
        <Style.Error>
          Oh no !<br /> The following error happened:
          <br /> {error}
        </Style.Error>
      )}
      <BaseComponent {...props} />
    </Style.Container>
  );
};

export default withDataFetching;
