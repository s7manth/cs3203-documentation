import { DataRow, SubRow } from '../components/Table/Table'

const SUBROW_HEADERS = ['SubComponent', 'Method', 'Return Type', 'Description']

const SP_SUBROWS: SubRow[] = [
  {
    subComponent: 'SP',
    method: 'ProcessSIMPLE(istream &source, shared_ptr<PKB> pkb)',
    description:
      'tokenizes, parses the SIMPLE program and stores extracted information into the pkb',
    returnType: 'void',
  },
  {
    subComponent: 'Tokenizer',
    method: 'Tokenize(istream &stream)',
    description: 'tokenize the SIMPLE program',
    returnType: 'shared_ptr<Parser::TokenStream>',
  },
  {
    subComponent: 'Parser',
    method: 'ParseSource(TokenStream &tokens)',
    description: 'generate an AST Program from the tokens',
    returnType: 'shared_ptr<Program>',
  },
  {
    subComponent: 'Parser',
    method: 'static IsStatement(Line &line)',
    description: '',
    returnType: 'bool',
  },
  {
    subComponent: 'Parser',
    method: 'static IsProcedure(Line &line)',
    description: '',
    returnType: 'bool',
  },
  {
    subComponent: 'DesignExtractor',
    method: 'ExtractDesign(shared_ptr<Program> program)',
    description: 'extract information from the AST Program created',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitProcedure(shared_ptr<Procedure> procedure)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitVariable(shared_ptr<Variable> variable)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitConstant(shared_ptr<Constant> constant)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method:
      'VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method:
      'VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method:
      'VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method:
      'VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitReadStatement(shared_ptr<ReadStatement> read_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitPrintStatement(shared_ptr<PrintStatement> print_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitIfStatement(shared_ptr<IfStatement> if_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitWhileStatement(shared_ptr<WhileStatement> while_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitProcedure(shared_ptr<Procedure> procedure)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitVariable(shared_ptr<Variable> variable)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitConstant(shared_ptr<Constant> constant)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method:
      'VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method:
      'VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method:
      'VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method:
      'VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitReadStatement(shared_ptr<ReadStatement> read_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitPrintStatement(shared_ptr<PrintStatement> print_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitIfStatement(shared_ptr<IfStatement> if_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitWhileStatement(shared_ptr<WhileStatement> while_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method:
      'ExtractFollows(shared_ptr<Statement> prev_stmt, shared_ptr<Statement> curr_stmt)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitConstant(shared_ptr<Constant> constant)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitVariable(shared_ptr<Variable> variable)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitProcedure(shared_ptr<Procedure> procedure)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitWhileStatement(shared_ptr<WhileStatement> while_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitIfStatement(shared_ptr<IfStatement> if_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method:
      'VisitRelationalOperation(shared_ptr<RelationalOperation> rel_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitCallStatement(shared_ptr<CallStatement> call_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitReadStatement(shared_ptr<ReadStatement> read_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method: 'VisitPrintStatement(shared_ptr<PrintStatement> print_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method:
      'VisitConditionalOperation(shared_ptr<ConditionalOperation> cond_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method:
      'VisitAssignStatement(shared_ptr<AssignStatement> assign_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'CfgExtractor',
    method:
      'VisitArithmeticalOperation(shared_ptr<ArithmeticOperation> arith_operation)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'EntityExtractor',
    method: 'VisitCallStatement(shared_ptr<CallStatement> call_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'SetIsExtractIndirectModifiesAndUsesTrue();',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'AbstractionExtractor',
    method: 'VisitCallStatement(shared_ptr<CallStatement> call_statement)',
    description: '',
    returnType: 'void',
  },
  {
    subComponent: 'SpSemanticValidator',
    method: 'ValidateProgram(shared_ptr<Program> program)',
    description: '',
    returnType: 'void',
  },
]

const SP_ROW: DataRow = {
  component: 'SP',
  subRowHeaders: SUBROW_HEADERS,
  subrows: SP_SUBROWS,
}

export const API_ROWS: DataRow[] = [SP_ROW]
