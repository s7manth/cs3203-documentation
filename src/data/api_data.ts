import { DataRow, SubRow } from "../components/Table/Table";

const SUBROW_HEADERS = ["SubComponent", "Method", "Return Type"];

const SP_SUBROWS: SubRow[] = [
  {
    subComponent: "SP",
    method: "ProcessSIMPLE(istream &source, shared_ptr<PKB> pkb)",
    description:
      "tokenizes, parses the SIMPLE program and stores extracted information into the pkb",
    returnType: "void",
  },
  {
    subComponent: "Tokenizer",
    method: "Tokenize(istream &stream)",
    description: "tokenize the SIMPLE program",
    returnType: "shared_ptr<Parser::TokenStream>",
  },
  {
    subComponent: "Parser",
    method: "ParseSource(TokenStream &tokens)",
    description: "generate an AST Program from the tokens",
    returnType: "shared_ptr<Program>",
  },
  {
    subComponent: "Parser",
    method: "static IsStatement(Line &line)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "Parser",
    method: "static IsProcedure(Line &line)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "DesignExtractor",
    method: "ExtractDesign(shared_ptr<Program> program)",
    description: "extract information from the AST Program created",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitProcedure(shared_ptr<Procedure> procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitVariable(shared_ptr<Variable> variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitConstant(shared_ptr<Constant> constant)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method:
      "VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method:
      "VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method:
      "VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method:
      "VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitReadStatement(shared_ptr<ReadStatement> read_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitPrintStatement(shared_ptr<PrintStatement> print_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitIfStatement(shared_ptr<IfStatement> if_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitWhileStatement(shared_ptr<WhileStatement> while_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitProcedure(shared_ptr<Procedure> procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitVariable(shared_ptr<Variable> variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitConstant(shared_ptr<Constant> constant)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method:
      "VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method:
      "VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method:
      "VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method:
      "VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitReadStatement(shared_ptr<ReadStatement> read_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitPrintStatement(shared_ptr<PrintStatement> print_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitIfStatement(shared_ptr<IfStatement> if_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitWhileStatement(shared_ptr<WhileStatement> while_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method:
      "ExtractFollows(shared_ptr<Statement> prev_stmt, shared_ptr<Statement> curr_stmt)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitConstant(shared_ptr<Constant> constant)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitVariable(shared_ptr<Variable> variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitProcedure(shared_ptr<Procedure> procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitWhileStatement(shared_ptr<WhileStatement> while_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitIfStatement(shared_ptr<IfStatement> if_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method:
      "VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitCallStatement(shared_ptr<CallStatement> call_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitReadStatement(shared_ptr<ReadStatement> read_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method: "VisitPrintStatement(shared_ptr<PrintStatement> print_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method:
      "VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method:
      "VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "CfgExtractor",
    method:
      "VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "EntityExtractor",
    method: "VisitCallStatement(shared_ptr<CallStatement> call_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "SetIsExtractIndirectModifiesAndUsesTrue();",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "AbstractionExtractor",
    method: "VisitCallStatement(shared_ptr<CallStatement> call_statement)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "SpSemanticValidator",
    method: "ValidateProgram(shared_ptr<Program> program)",
    description: "",
    returnType: "void",
  },
];

const SP_ROW: DataRow = {
  component: "SP",
  count: 41,
  subRowHeaders: SUBROW_HEADERS,
  subrows: SP_SUBROWS,
};

const PKB_SUBROWS: SubRow[] = [
  {
    subComponent: "PkbWriteFacade",
    method: "AddCfg(const CfgPtr &cfg)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddCallStatementToProcedureName(const StatementNumber &statement_number, const Procedure &procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddCallsStarRelation()",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddCallsRelation(const Procedure &caller_procedure, const Procedure &callee_procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddWhileStatementAndCondition(const StatementNumber &statement_number, const ExpressionPtr &expression)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddIfStatementAndCondition(const StatementNumber &statement_number, const ExpressionPtr &expression)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddAssignmentStatementAndExpression(const StatementNumber &statement_number, const ExpressionPtr &expression)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddExpressionSideEffects(const StatementNumber &statement_number, const ExpressionPtr &expression)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddParentStarRelation()",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddParentRelation(const StatementNumber &statement_number_1, const StatementNumber &statement_number_2)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddFollowsStarRelation()",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddFollowsRelation(const StatementNumber &statement_number_1, const StatementNumber &statement_number_2)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddProcedureModifyingVariable(const Procedure &procedure, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddStatementModifyingVariable(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddProcedureUsingVariable(const Procedure &procedure, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddStatementOfAType(const StatementNumber &statement_number, const StatementType &statement_type)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddStatementUsingVariable(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddModifiesSideEffects(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method:
      "AddUsesSideEffects(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddConstant(const Constant &constant)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddProcedure(const Procedure &procedure)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbWriteFacade",
    method: "AddVariable(const Variable &variable)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetVariables()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetConstants()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProcedures()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetReadStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetPrintStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetCallStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetWhileStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetIfStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignStatements()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetVariablesModifiedByStatement(const StatementNumber &statement_number)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetModifiesStatementVariablePairs(const StatementType &statement_type)",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetStatementsModifiesVariable(const Variable &variable, const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "SingleSet GetStatementsThatModify(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "HasModifiesStatementRelationship(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetVariablesModifiedByProcedure(const Procedure &procedure)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetModifiesProcedureVariablePairs()",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProceduresModifiesVariable(const Variable &variable)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProceduresThatModify()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "HasModifiesProcedureRelationship(const Procedure &procedure, const Variable &variable)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetUsesStatementVariablePairs(const StatementType &statement_type)",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatUses(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetVariablesUsedByStatement(const StatementNumber &statement_number)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetStatementsUsesVariable(const StatementType &statement_type, const Variable &variable)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "HasUsesStatementRelationship(const StatementNumber &statement_number, const Variable &variable)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetUsesProcedureVariablePairs()",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProceduresThatUse()",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetVariablesUsedByProcedure(const Procedure &procedure)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProceduresUsesVariable(const Variable &variable)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "HasUsesProcedureRelationship(const Procedure &procedure, const Variable &variable)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetFollowPairs(const StatementType &statement_type, const StatementType &statement_type_follower)",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetStatementFollowedBy(const StatementNumber &statement_number, const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetStatementFollowing(const StatementNumber &statement_number, const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsWithFollowers(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementThatAreFollowers(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "HasFollowsRelationship(const StatementNumber &statement_number, const StatementNumber &statement_number_follower)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsAnyFollowsRelationshipPresent()",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetFollowsStarPairs(const StatementType &type_1, const StatementType &type_2)",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetFollowsStar(const StatementNumber &statement_number, const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "GetFollowsStarBy(const StatementNumber &statement_number, const StatementType &statement_type);",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetFollowsStarFirst(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetFollowsStarSecond(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasFollowsStarRelationship()",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasFollowsStar",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasFollowsStarBy",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsFollowsStar",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetParentChildPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementThatIsParentOf",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreChildrenOf",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreParents",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreChildren",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasParentChildRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsAnyParentRelationshipPresent",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAncestorDescendantPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreAncestorOf",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreDescendantsOf",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreAncestors",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetStatementsThatAreDescendants",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasAncestorDescendantRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsAnyAncestorDescendantRelationshipPresent",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignWithExactExpression",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignWithPartialExpression",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetIfConditionVariablePair",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetIfWithConditionVariable",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetIfThatHasConditionVariable",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetWhileConditionVariablePair",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetWhileWithConditionVariable",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetWhileThatHasConditionVariable",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "RetrieveAllVariablesOfExpression",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetCallProcedurePair",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsPairsWithSpecifiedCaller",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsStarPairsWithSpecifiedCaller",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsPairsWithSpecifiedCallee",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsStarPairsWithSpecifiedCallee",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallStatementsFromAProcedure",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllCallsStarPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasCallsRelation",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasCallsStarRelation",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresWithSpecifiedCaller",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "SingleSet GetAllProceduresWithSpecifiedCallee",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresThatAreCallers",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresThatAreCallees",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsThereAnyCallsRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresWithSpecifiedCallerStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresWithSpecifiedCalleeStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresThatAreCallersStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllProceduresThatAreCalleesStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsThereAnyCallsStarRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetProcedureFromCallStatement",
    description: "",
    returnType: "Procedure",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAffectsPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignsAffectedBy",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignsAffecting",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllAssignsThatAreAffected",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllAssignsThatAffect",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasAffectsRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsThereAnyAffectsRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAffectsStarPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignsAffectedStarBy",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAssignsAffectingStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllAssignsThatAreAffectedStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetAllAssignsThatAffectStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasAffectsStarRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsThereAnyAffectsStarRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNext",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextBy",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextFirst",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextSecond",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNextRelationship",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNext",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNextBy",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "IsNext",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStarPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStarPairs",
    description: "",
    returnType: "PairSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStar",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStarBy",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStarFirst(const StatementType &statement_type);",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "GetNextStarSecond(const StatementType &statement_type)",
    description: "",
    returnType: "SingleSet",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNextStarRelationship()",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNextStar(const StatementNumber &statement_number)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "HasNextStarBy(const StatementNumber &statement_number)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method:
      "IsNextStar(const StatementNumber &statement_num_1, const StatementNumber &statement_num_2)",
    description: "",
    returnType: "bool",
  },
  {
    subComponent: "PkbReadFacade",
    method: "ClearCache()",
    description: "",
    returnType: "void",
  },
];

const PKB_ROW: DataRow = {
  component: "PKB",
  count: 146,
  subRowHeaders: SUBROW_HEADERS,
  subrows: PKB_SUBROWS,
};

const QPS_SUBROWS: SubRow[] = [
  {
    subComponent: "PqlEvaluator",
    method: "Evaluate()",
    description: "",
    returnType: "result",
  },
  {
    subComponent: "PqlEvaluator",
    method: "EvaluateBasicSelectStatement()",
    description: "",
    returnType: "result",
  },
  {
    subComponent: "QpsParser",
    method: "ParseQuery(string query)",
    description: "",
    returnType: "query",
  },
  {
    subComponent: "QpsTokenizer",
    method: "SplitQuery(string query)",
    description: "",
    returnType: "query_lines",
  },
  {
    subComponent: "QpsTokenizer",
    method:
      "ExtractAbstractSyntaxFromDeclarations(vector<string> declarations)",
    description: "",
    returnType: "declaration_map",
  },
  {
    subComponent: "QpsTokenizer",
    method:
      "ExtractAbstractSyntaxFromDeclarations(vector<string> declarations)",
    description: "",
    returnType: "declaration_map",
  },
  {
    subComponent: "QpsTokenizer",
    method: "ParseSynonym(string select_statement)",
    description: "",
    returnType: "synonym",
  },
  {
    subComponent: "QpsTokenizer",
    method: "ParseSubClauses(string remaining_query_lines)",
    description: "",
    returnType: "clause_list",
  },
  {
    subComponent: "ClauseSyntaxValidator",
    method: "ValidateSuchThatClauseSyntax(Clause clause)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "ClauseSyntaxValidator",
    method: "ValidatePatternClauseSyntax(Clause clause)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "ClauseSemanticValidator",
    method: "ValidateSuchThatClauseSemantic(Clause clause)",
    description: "",
    returnType: "void",
  },
  {
    subComponent: "ClauseSemanticValidator",
    method: "ValidatePatternClauseSemantic(Clause clause)",
    description: "",
    returnType: "void",
  },
];

const QPS_ROW: DataRow = {
  component: "QPS",
  count: 12,
  subRowHeaders: SUBROW_HEADERS,
  subrows: QPS_SUBROWS,
};

export const API_ROWS: DataRow[] = [SP_ROW, PKB_ROW, QPS_ROW];
