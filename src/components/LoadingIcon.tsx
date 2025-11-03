interface LoadingIconProps {
  className?: string;
}

const LoadingIcon = ({ className }: LoadingIconProps) => {
  return (
    <div className="flex justify-center items-center">
      <div
        className={`w-7 h-7 border-4 border-gray-600 dark:border-yellow-300 border-t-transparent rounded-full animate-spin ${className}`}
      ></div>
    </div>
  );
};

export default LoadingIcon;
