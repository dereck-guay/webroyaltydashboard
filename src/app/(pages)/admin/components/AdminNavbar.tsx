import type { FC } from "react";
import { UserButton } from "@clerk/nextjs/app-beta";
import { BsDatabaseFillGear } from "react-icons/bs";

const AdminNavbar: FC = () => {
    return (
        <nav className="flex items-center justify-between h-14 bg-slate-800 px-7">
            <div className=" flex items-center gap-x-1">
                <span className="text-3xl text-primary">
                    <BsDatabaseFillGear />
                </span>
                <div>
                    <h1 className="font-semibold text-white">
                        WebRoyalty Dashboard
                    </h1>
                    <div className="text-xs -mt-1.5 text-slate-200">
                        Command Center
                    </div>
                </div>
            </div>
            <UserButton afterSignOutUrl="/login" />
        </nav>
    );
};

export default AdminNavbar;
