import React from 'react'

const UpcomingReceive = () => {
    return (
        <div>
            <div className="upr grid grid-cols-3 text-center mt-10">
                <div className="upcoming divider-middle border-solid border-b-2 border-x-0 border-t-0 border-[#EEEEEE] hover:border-orange-600 pb-2">
                    <p>Upcoming</p>
                </div>
                <div className="previous divider-middle border-b-2 border-solid border-[#EEEEEE] border-t-0 border-x-0 hover:border-orange-600 pb-2">
                    <p>Previous</p>
                </div>
                <div className="request divider-middle border-b-2 border-solid border-orange-600 border-t-0 border-x-0 hover:border-orange-600 pb-2 ">
                    <p>Request</p>
                </div>
            </div>
            <div className="sent-received w-[200px] grid grid-cols-2 text-center mx-auto mt-10 mb-12">
                <div className="sent divider-middle border-b-2 border-solid border-t-0 border-x-0 border-[#EEEEEE] hover:border-orange-600 ">
                    <p>Sent</p>
                </div>
                <div className="received divider-middle border-b-2 border-solid  border-t-0 border-x-0 border-orange-600 hover:border-orange-600">
                    <p>Received</p>
                </div>
            </div>
        </div>
    )
}

export default UpcomingReceive