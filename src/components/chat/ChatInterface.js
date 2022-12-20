import 'semantic-ui-css/semantic.min.css'




//Create function component
export const ChatInterface =(props) =>{
  return (
    //   <div class="ui segment">
            // <div class="ui five column grid">
                <div class="column">
                        <div class="ui segment">
                                <div class="ui top attached label">
                                    <div class="ui two column grid">
                                            
                                            <div class="column">Chat</div>
                                            <div class="column">
                                                    <div class="ui two column grid">
                                                            <div class="column">Eric Smith</div>
                                                            <div class="column"> <i class="user circle icon"></i></div>
                                                            
                                                    </div>
                                            </div>
                                    </div>
                                </div>
                </div>
                    <div class="ui fluid search selection dropdown">
                            <input type="hidden" name="country"></input>
                            <i class="dropdown icon"></i>
                            <div class="default text">Select User</div>
                            <div class="menu">
                                <div class="item" data-value="jd"><i class="jd user circle icon"></i>John Doe</div>
                                <div class="item" data-value="er"><i class="er user circle icon"></i>Eric SMith</div>
                            </div>
                    </div>
                    <div class="ui segment">
                        <div class="ui raised segment">
                                    <a class="ui blue ribbon label">Eric</a>
                                    <span> 10:00:01</span>
                                    <p>good luck!</p>
                        </div>
                        <div class="ui raised segment">
                                    <a class="ui green right ribbon label">Me</a>
                                    <span> 10:00:02</span>
                                    <p>You gonna die!</p>
                        </div>
                        <div class="ui raised segment">
                                <a class="ui blue ribbon label">Eric</a>
                                <span> 10:00:03</span>
                                <p>Not sure</p>
                        </div>
                    </div>
                    <div class="ui form">
                        <div class="field">
                            <label>Short Text</label>
                            <textarea rows="2"></textarea>
                        </div>
                    </div>
                    <button class="fluid ui right labeled icon button">
                        <i class="right arrow icon"></i>
                        Send
                    </button>
                </div>
            // </div>
    // </div>
  );
}



