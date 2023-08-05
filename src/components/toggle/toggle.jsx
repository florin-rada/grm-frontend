import React, {useState} from 'react';
import { Switch } from '@headlessui/react';

export const Toggle = ({description}) => {
    const [enabled, setEnabled] = useState(false);

    return (
        <div>
            <Switch.Group>
                <div className="flex items-center">
                    <Switch
                    checked={enabled}
                    onChange={setEnabled}
                    className={`${
                        enabled ? 'bg-blue-600' : 'bg-gray-200'
                    } relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2`}
                    >
                    <span
                        className={`${
                            enabled ? 'translate-x-6' : 'translate-x-1'
                        } inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
                    />
                    </Switch>
                    <Switch.Label className="ml-2">Enable notifications</Switch.Label>
                </div>
            </Switch.Group>
        </div>
    )
}