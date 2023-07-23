import { classNames } from '@shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button } from '@shared/ui/Button/Button';
import cls from './ErrorComponent.module.scss';

interface ErrorComponentProps {
  className?: string;
}

export const ErrorComponent = ({ className }: ErrorComponentProps) => {
    const { t } = useTranslation();

    const reloadPage = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };

    return (
        <div className={classNames(cls.ErrorComponent, {}, [className])}>
            <p>{t('Произошла непредвиденная ошибка')}</p>
            <Button onClick={reloadPage}>
                {t('Перезагрузить приложение')}
            </Button>
        </div>
    );
};
