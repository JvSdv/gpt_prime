import { UserButton } from "@clerk/nextjs";

const RootPage = () => {
    return (
    <div>
        Root Page
        <UserButton afterSignOutUrl="/" />
    </div>
    );
};

export default RootPage;  