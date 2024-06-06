import React from 'react';

const Transfer = () => {
    return(
        <div className="min-h-screen flex flex-col">
            <header className="bg-primary text-white text-center py-4 w-full">
                <h1 className="text-4xl font-bold">Transfer Funds to First City Credit Union</h1>
            </header>
            <main className="flex-col flex-1">
                    <div className="flex justify-center p-10">
                    <a href="https://app.loanspq.com/xa/xpressApp.aspx?enc=Kw21Wblm1yxpjJabdoZaD9P5Ohrb21U42vf4mi4ehVOHesN2P5T0h5-U4tYLIGz1pbxW5gXLDq4i9XcbQAEpui6QgaQp7OmdIC4KX01JRaLYmxn24WPdjZkK9UMNSPC3" target='_blank'>
                        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 mb-4 justify-center">
                            Transfer Funds
                        </button>
                    </a>
                </div>
            </main>
        </div>    
    )
}

export default Transfer;