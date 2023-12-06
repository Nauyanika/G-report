import React from 'react'
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom'
 
import Home from '../../views/Dashboard/Home';

import ViewMasterId from '../../views/agents/ViewMasterId';

import ViewSuperMaster from '../../views/Super/ViewSuperMaster';

import AddMasterId from '../../views/agents/AddMasterId';
import AddSuperMaster from '../../views/Super/AddSuperMaster';
import AddNewPlayer from '../../views/players/AddNewPlayer';
import PlayersList from '../../views/players/PlayersList';
import PointSettings from '../../views/points/PointSettings';

import PointTransferred from '../../views/points/PointTransferredSuper';
import PointReceived from '../../views/points/PointReceived';
import PointCancel from '../../views/points/PointCancel';
import PointRejected from '../../views/points/PointRejected';
import Transferable from '../../views/points/Transferable';
import Receivable from '../../views/points/Receivable';

import JeetoJokerGame from '../../views/gamebet/JeetoJokerGame';
import ShowCurrentBet from '../../views/gamebet/ShowCurrentBet';
import DoubleChanceGame from '../../views/gamebet/DoubleChanceGame';
import CardsGame from '../../views/gamebet/CardsGame';
import TripleChanceGames from '../../views/gamebet/TripleChanceGames';



import PointTransferredMaster from '../../views/points/PointTransferredMaster';
import PointTransferredPlayer from '../../views/points/PointTransferredPlayer';
import PointTransferredSuper from '../../views/points/PointTransferredSuper';
 


import GameReport from '../../views/points/GameReport';

import { Gamerecords, FunTargetRecords, RoulletGameRecords,  TripleChanceGameRecords } from '../../views/points/Gamerecords';


import DailyStatus from '../../views/points/DailyStatus';
import TransactionReport from "../../views/points/TransactionReport"
import GameHistory from '../../views/game/GameHistory';
import AndarBaharGameHistory from '../../views/game/AndarBaharGameHistory';

import RoulletGameHistory from '../../views/game/RoulletGameHistory';
import FunTargetGameHistory from '../../views/game/FunTargetGameHistory';
import TripleChanceGameHistory from '../../views/game/TripleChanceGameHistory';
import SevenUpDownGameHistory from '../../views/game/SevenUpDownGameHistory';



import PlayerHistory from '../../views/players/PlayerHistrory';
//import ShowCurrentBet from '../../views/gamebet/ShowCurrentBet';
import ChangePassword from '../../views/settings/ChangePassword';
import ChangeUserPassword from '../../views/settings/ChangeUserPassword';
import TransactionHistory from '../../views/payments/TransactionHistory';
import WithdrawRequest from '../../views/payments/WithdrawRequest';
import Cards from '../../views/Cards/Cards'
import UsersList from '../../views/Users/UsersList'
import TrasnferPoints from "../layouts/TrasnferPoints"
import MultipointTransfer from "../../views/points/MultipointTransfer"
import FunTarget from '../../views/points/FunTarget';
import FunRoullet from '../../views/points/FunRoullet';
import TripleFun from '../../views/points/TripleFun';
import FunAB from '../../views/points/FunAB';

export default function AppContents() {
  return (
    <section className="content">
    <div className="container-fluid">
        <Route path="/" exact component={Home} /> 
        
        
  


        {/* <Route path="/SuperMaster" exact component={ViewSuperMaster} />  */}
        <Route path="/AddMaster" exact component={AddSuperMaster} /> 
        <Route path="/Point" exact component={AddSuperMaster} /> 
        <Route path="/MultipointTransfer" exact component={MultipointTransfer} /> 
        <Route path="/FunTarget" exact component={FunTarget} /> 
        <Route path="/FunRoullet" exact component={FunRoullet} /> 
        <Route path="/TripleFun" exact component={TripleFun} /> 
        <Route path="/FunAB" exact component={FunAB} /> 
        
        
        
        <Route path="/MasterId" exact component={ViewMasterId} /> 
        <Route path="/AdMasterId" exact component={AddMasterId} /> 
        <Route path="/PlayersList" exact component={PlayersList} /> 
        <Route path="/AddnewPlayer" exact component={AddNewPlayer} /> 
        
        <Route path="/Transactions" exact component={TransactionHistory} /> 

       
     
        <Route path="/PointTransfer" exact component={PointTransferred} /> 
        <Route path="/PointReceive" exact component={PointReceived} /> 
        <Route path="/PointReject" exact component={PointRejected} /> 
        <Route path="/PointCancell" exact component={PointCancel} /> 
        <Route path="/Receivabled" exact component={Receivable} /> 
        <Route path="/Transferabled" exact component={Transferable} /> 
      

        

        <Route path="/GameReports" exact component={GameReport} /> 
        <Route path="/DailyStatuss" exact component={DailyStatus} /> 


         <Route path="/pointPlayer" exact component={PointTransferredPlayer} /> 
        <Route path="/pointSuperMaster" exact component={PointTransferredSuper} /> 
        <Route path="/pointMaster" exact component={PointTransferredMaster} /> 
 




        <Route path="/userWithdrawRequest" exact component={WithdrawRequest} /> 
        <Route path="/PlayersHistrory" exact component={PlayerHistory} /> 
        <Route path="/GamePlayHistory" exact component={GameHistory} /> 
        <Route path="/AndarBaharGamePlayHistory" exact component={AndarBaharGameHistory} />


        <Route exact path="/Gamerecords" component={RoulletGameRecords} />
        <Route exact path="/Gamerecords" component={FunTargetRecords} />
        <Route exact path="/Gamerecords" component={TripleChanceGameRecords} />
        <Route exact path="/Gamerecords" component={Gamerecords} />
        <Route exact path="/TrasnferPoints" component={TrasnferPoints} />
        
       




        <Route path="/RoulletGamePlayHistory" exact component={RoulletGameHistory} />
        <Route path="/FunTargetGamePlayHistory" exact component={FunTargetGameHistory} /> 
        <Route path="/TripleChanceGamePlayHistory" exact component={TripleChanceGameHistory} /> 
        <Route path="/SevenUpGamePlayHistory" exact component={SevenUpDownGameHistory} /> 





        <Route path="/ShowCurrentBet" exact component={ShowCurrentBet} /> 
        <Route path="/JeetoJokerGame" exact component={JeetoJokerGame} /> 
        <Route path="/16CardsGame" exact component={CardsGame} /> 
        <Route path="/SpinWinGame" exact component={DoubleChanceGame} /> 
        <Route path="/AndarbaharGame" exact component={TripleChanceGames} /> 


        







        <Route path="/TransactionReport" exact component={TransactionReport} /> 
        <Route path="/ChangePassword" exact component={ChangePassword} /> 
        <Route path="/ResetUserPassword" exact component={ChangeUserPassword} /> 
        <Route path="/cards" exact component={Cards} /> 
        <Route path="/UsersList" exact component={UsersList} /> 
        </div>
    </section>
  )
}
